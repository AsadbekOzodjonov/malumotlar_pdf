import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const App = () => {
  const [formData, setFormData] = useState({
    name: "asadbek",
    surname: "ozodjonov",
    age: 17,
    desc: "asadbek ozodjonov akramjon o'gli yoshim 17 da hozir najot talim oquv markazida full stack developer bolib oqiman",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(e.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>Form elementlari</form>
      {formData && (
        <PDFDownloadLink
          document={<MyDocument data={formData} />}
          fileName="ma'lumotlar.pdf"
        >
          Yuklab olish
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;
