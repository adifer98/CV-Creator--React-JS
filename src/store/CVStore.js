import {create} from "zustand/react";


const useCVStore = create((set) => ({
    openModal: false, 
    setOpenModal: (toOpen) => {
        set(state => ({...state, openModal: toOpen}))
    },
    generalInfo: {
        fullName: "Adi Fermon",
        email: "adifermon10@gmail.com",
        phone: "052-8018885",
        city: "Herzliya",
        state: "Israel"
    },
    education: [{
        institution: "Technion",
        startDate: "10/2020",
        endDate: "10/2024",
        fieldOfStudy: "Computer Science",
        descriptions: []
    }],
    experience: [{
        company: "One Technologies",
        startDate: "1/2024",
        endDate: "3/2025",
        position: "Software Developer",
        descriptions: []
    }],
    setInfo: ({generalInfo, education, experience}) => {
        set(prevState => ({...prevState, generalInfo, education, experience}))
    },
    save2Pdf: false,
    setSave2Pdf: (res) => {
        set(prevState => ({...prevState, save2Pdf: res}))
    },
}))


export default useCVStore;