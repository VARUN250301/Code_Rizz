import React from 'react';
import './style.css';

const AboutUs = () => {
  const toggleContent = (sectionId) => {
    const content = document.getElementById(sectionId);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  };

  return (
    <div>
      <div className="collapsible" onClick={() => toggleContent('customerLoyalty')}>Improved Customer Loyalty</div>
      <div className="content" id="customerLoyalty">
        <p>Enhances customer experience through the digitization of services and processes.</p>
        <p>Metrics: Percentage increase in customer satisfaction</p>
        <p>Potential Impact: A 10% increase in customer satisfaction</p>
        <p>Success Story: Implementation resulted in a 10% boost in customer satisfaction.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('communityDevelopment')}>Community Development</div>
      <div className="content" id="communityDevelopment">
        <p>Companies contribute a portion of their profits towards community development projects.</p>
        <p>Metrics: Percentage of profits allocated to community development</p>
        <p>Potential Impact: A 15% increase in profits allocated to community development</p>
        <p>Success Story: CSR initiatives witnessed a 15% increase in profits allocated to community development projects.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('economic')}>Economic</div>
      <div className="content" id="economic">
        <p>Encourages foreign companies to invest in manufacturing within India, boosting the economy.</p>
        <p>Metrics: Percentage increase in foreign investments</p>
        <p>Potential Impact: A 20% increase in foreign investments in manufacturing</p>
        <p>Success Story: "Make in India" campaign attracted a 20% increase in foreign investments in manufacturing.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('philanthropic')}>Philanthropic</div>
      <div className="content" id="philanthropic">
        <p>Many companies allocate funds for philanthropic activities in education, healthcare, etc.</p>
        <p>Metrics: Percentage of profits allocated to philanthropy</p>
        <p>Potential Impact: A 12% increase in funds allocated to philanthropic activities</p>
        <p>Success Story: XYZ Corporation witnessed a 12% increase in funds allocated to philanthropic initiatives.</p>
      </div>

      {/* Repeat the above structure for other topics */}

    </div>
  );
};

export default AboutUs;
