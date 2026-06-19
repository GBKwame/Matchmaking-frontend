import { useState } from 'react'
import Header from '../../component/header/header';
import ApplyComOne from './component/ApplyComOne';
import ApplyComTwo from './component/ApplyComTwo';
import ApplyComTree from './component/ApplyComTree';
import ApplyComFour from './component/ApplyComFour';
import ApplyComFive from './component/ApplyComFive';
import ApplyComSix from './component/ApplyComSix';
import ApplyComSeven from './component/ApplyComSeven';
import Chat from "../../component/chat/chat"


function Apply() {

  const [currentSetup, setCurrentSetup] = useState(() => {
    const saved = localStorage.getItem('applyCurrentStep');
    return saved ? Number(saved) : 0;
  });

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('applyFormData');
    return saved
      ? { ...JSON.parse(saved), photos: [] }
      : {
          firstName: '',
          email: '',
          phoneNumber: '',
          gender: '',
          residence: '',
          age: '',
          city: '',
          nationality: '',
          occupation: '',
          education: '',
          religion: '',
          children: '',
          wantChildren: '',
          smoking_drinking: '',
          language: '',
          personalities: '',
          hobbies: '',
          passion: '',
          relationship_values: '',
          relationship_goals: '',
          prefrence_age_range: '',
          prefrence_location: '',
          open_to_long_distance: '',
          desired_quality_in_a_partner: '',
          dealbreakers: '',
          photos: [],
        };
  });

  const [profileId, setProfileId] = useState(localStorage.getItem("draftProfileId") || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const saveStepData = async (stepData) => {
  try {

    const dataToSave = { ...stepData };
    delete dataToSave.photos;

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user-api/save_draft`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileId, ...dataToSave })
    });
    const result = await res.json();

    if (result.success && !profileId && result.profileId) {
      setProfileId(result.profileId);
      localStorage.setItem("draftProfileId", result.profileId);
    }
  } catch (e) {
    console.log(e);
  }
};

  const handleNext = () => {
    saveStepData(formData);

  const dataToStore = { ...formData };
  delete dataToStore.photos;
  localStorage.setItem('applyFormData', JSON.stringify(dataToStore))
    localStorage.setItem('applyFormData', JSON.stringify(dataToStore));

    setCurrentSetup((prev) => {
      const next = prev + 1;
      localStorage.setItem('applyCurrentStep', next);
      return next;
    });
  };

  const handleBack = () => {
    setCurrentSetup((prev) => {
      if (prev >0){
      const next = prev - 1;
      localStorage.setItem('applyCurrentStep', next);
      return next;
      }
      return prev
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach(key => {
      if (key !== 'photos') {
        data.append(key, formData[key]);
      }
    });

    formData.photos.forEach((file) => {
      data.append('photos', file);
    });

    data.append('profileId', profileId);

    console.log("FormData Fields:");
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user-api/create_profile`, {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        localStorage.removeItem('applyFormData');
        localStorage.removeItem('applyCurrentStep');
        localStorage.removeItem('draftProfileId');
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setCurrentSetup((prev) => prev + 1);
  };

  const setProps = {
    formData,
    setFormData,
    handleChange,
    handleNext,
    handleBack,
    currentSetup,
    totalSteps: 7
  }

  const steps = [
    <ApplyComOne {...setProps} />,
    <ApplyComTwo {...setProps} />,
    <ApplyComTree {...setProps} />,
    <ApplyComFour {...setProps} />,
    <ApplyComFive {...setProps} />,
    <ApplyComSix {...setProps} />,
    <ApplyComSeven {...setProps} />
  ]


  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-warm pt-32 pb-24" >
        <div className="mx-auto max-w-3xl px-6 lg:px-10" >
          <form onSubmit={handleSubmit}>
            {steps[currentSetup]}
          </form>
        </div>
      </div>
    
      <Chat />

    </>
  )
}

export default Apply