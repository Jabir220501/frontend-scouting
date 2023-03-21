import React from 'react'
import QuestionItem from '../components/QuestionItem'

function Taak3() {
  return (
    <div>
    <div className="content question h-full flex items-center justify-center bg-gray-50">
      <div className="h-full mt-20">
        <QuestionItem
          question="3.1 Actief participeren in overleg met eigen inbreng en afstemmig."
          name="3.1"
        />
        <QuestionItem
          question="3.2 Inzien noodzaak juiste taakverdeling."
          name="3.2"
        />
        <QuestionItem
          question="3.3 Eigen werkzaamheden afstemmen met overige teamleden."
          name="3.3"
        />
        <QuestionItem
          question="3.4 Op bekwame wijze speleenheid vertegenwoordigen binnen groep (contacten andere teamleiders, aanspreekpunt ouders/jongeren hierover adviseren)."
          name="3.4"
        />
        <QuestionItem
          question="3.5 Op bekwame wijze speleenheid vertegenwoordigen buiten groep (contacten teamleiders andere groepen, regio)."
          name="3.5"
        />
        <a href="/score" className="w-full">
          <button className="loginFormSubmit bg-blue-600 p-2 w-full text-white rounded-lg text-white shadow-sm shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Inleveren
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Taak3