'use client'

import SelectStep from "@/cpmponents/module/panel/SelectStep";
import Information from "@/cpmponents/module/student/Information";
import Option from "@/ui/Option";
import { useState } from "react";

export default function EditPage() {

const [step,setStep]=useState(1)
const [student,setStudent]=useState({
  schoolId: '',
  educationLevels:'',
  schoolName: '',
  schoolShift: 1, 
  studentFullName: '',
  studentNationalId: '',
  studentBirthDate: '', // yyyy-mm-dd
  studentGrade: '',
  addressText: '',
  lat: null,
  lng: null,
  guardianFullName: '',
  guardianNationalId: '',
  fatherPhone: '',
  motherPhone: '',
  contractStatus: null, // NOT_SIGNED | SIGNED
  prepaymentStatus: null, // NOT_PAID | PENDING | PAID

})

    return (
      <div className="p-6 md:p-8 ">
      <SelectStep step={step} setstep={setStep} />
      <Information setStep={setStep} setStudent={setStudent} student={student} />
      </div>
    );
}