import React from "react";
import "./CSRComplianceEducation.css"; // Import your CSS file
import Navbar from "../../components/Navbar/Navbar";

const CSRComplianceEducation = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Legal and Ethical Education on CSR</h1>

        <p>
          In alignment with the Government of India's mandate, companies are
          required to allocate a minimum of 2 percent of their profits towards
          Corporate Social Responsibility (CSR) initiatives. It is crucial for
          companies to understand the legal and ethical aspects of CSR to ensure
          compliance and adhere to ethical standards.
        </p>

        <h2>Key Features for CSR Compliance Education:</h2>

        <ul>
          <li>Informative resources on legal obligations related to CSR.</li>
          <li>Guidance on ethical considerations in CSR initiatives.</li>
          <li>
            Interactive modules to aid understanding of compliance requirements.
          </li>
          <li>
            Case studies illustrating successful CSR compliance and ethical
            practices.
          </li>
          <li>Regular updates on legal changes affecting CSR policies.</li>
        </ul>

        <h2>Why is CSR Compliance Important?</h2>

        <p>
          Understanding and complying with CSR regulations not only ensures
          adherence to the law but also contributes to building a positive
          corporate image. Ethical CSR practices lead to sustainable and
          impactful initiatives that benefit both companies and the communities
          they serve.
        </p>

        {/* Add more educational content as needed */}
      </div>
    </div>
  );
};

export default CSRComplianceEducation;
