import "../styles/CVLayout.scss";
import GeneralInfo from "./GeneralInfo.jsx";
import EducationInfo from "./EducationInfo.jsx";
import WorkInfo from "./WorkInfo.jsx";
import useCVStore from "../store/CVStore.js";
import {useEffect, useRef, useState} from "react";
import html2pdf from "html2pdf.js";

export default function CVLayout() {
    
    const save2Pdf = useCVStore(state => state.save2Pdf);
    const setSave2Pdf = useCVStore(state => state.setSave2Pdf);

    const cvRef = useRef(null);

    const [loading, setLoading] = useState(false);

    function handleDownloadPDF() {
        if (loading) return;
        setLoading(true);
        const element = cvRef.current;

        const opt = {
            margin: 0,
            filename: 'my-cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf(undefined, undefined).set(opt).from(element).save()
            .then(() => {
                setSave2Pdf(false);
                setLoading(false);
            })
            .catch(err => {
                console.error("PDF generation failed:", err);
                setLoading(false);
            });
    }


    useEffect(() => {
        if (save2Pdf) {
            
            const timeout = setTimeout(() => {
                handleDownloadPDF();
            }, 100); 

            return () => clearTimeout(timeout);
        }
    }, [save2Pdf]);


    return (
        <div className="CV-layout">
            <div ref={cvRef} className="CV-display">
                <GeneralInfo />
                <EducationInfo />
                <WorkInfo />
            </div>
        </div>
    )
}