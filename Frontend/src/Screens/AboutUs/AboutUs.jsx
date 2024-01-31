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

  const handleNavbarClick = (sectionId) => {
    // Close all open content sections
    document.querySelectorAll('.content').forEach((content) => {
      content.style.display = 'none';
    });

    // Open the clicked section
    toggleContent(sectionId);
  };

  return (
    <div>
      <div className="navbar">
        <a href="#" onClick={() => handleNavbarClick('customerLoyalty')}>Improved Customer Loyalty</a>
        <a href="#" onClick={() => handleNavbarClick('communityDevelopment')}>Community Development</a>
        <a href="#" onClick={() => handleNavbarClick('economic')}>Economic</a>
        <a href="#" onClick={() => handleNavbarClick('philanthropic')}>Philanthropic</a>
        <a href="#" onClick={() => handleNavbarClick('charitableGiving')}>Charitable Giving</a>
        <a href="#" onClick={() => handleNavbarClick('costEfficiency')}>Cost Efficiency</a>
        <a href="#" onClick={() => handleNavbarClick('employeeRetentionRates')}>Employee Retention Rates</a>
        <a href="#" onClick={() => handleNavbarClick('engageStakeholders')}>Engage Stakeholders</a>
        <a href="#" onClick={() => handleNavbarClick('fairBusinessPractices')}>Fair Business Practices</a>
        <a href="#" onClick={() => handleNavbarClick('improvingLaborPolicies')}>Improving Labor Policies</a>
        <a href="#" onClick={() => handleNavbarClick('innovation')}>Innovation</a>
        <a href="#" onClick={() => handleNavbarClick('legalResponsibility')}>Legal Responsibility</a>
        <a href="#" onClick={() => handleNavbarClick('reducingCarbonFootprints')}>Reducing Carbon Footprints</a>
        <a href="#" onClick={() => handleNavbarClick('setMeasurableGoals')}>Set Measurable Goals</a>
        <a href="#" onClick={() => handleNavbarClick('employeeBenefits')}>Employee Benefits</a>
        <a href="#" onClick={() => handleNavbarClick('employeeVolunteering')}>Employee Volunteering</a>
        <a href="#" onClick={() => handleNavbarClick('sociallyEnvironmentallyConsciousInvestments')}>Socially and Environmentally Conscious Investments</a>
      </div>

      {/* Content Sections */}
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

      <div className="collapsible" onClick={() => toggleContent('charitableGiving')}>Charitable Giving</div>
      <div className="content" id="charitableGiving">
        <p>Accepts voluntary donations for providing immediate relief to those in distress.</p>
        <p>Metrics: Percentage increase in charitable donations</p>
        <p>Potential Impact: A 10% increase in charitable donations</p>
        <p>Success Story: Prime Minister's National Relief Fund witnessed a 10% rise in charitable contributions.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('costEfficiency')}>Cost Efficiency</div>
      <div className="content" id="costEfficiency">
        <p>Promotes digital transactions and reduces paperwork, enhancing cost efficiency.</p>
        <p>Metrics: Percentage improvement in cost efficiency</p>
        <p>Potential Impact: A 15% improvement in overall cost efficiency</p>
        <p>Success Story: Digital India Campaign led to a 15% improvement in overall cost efficiency.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('employeeRetentionRates')}>Employee Retention Rates</div>
      <div className="content" id="employeeRetentionRates">
        <p>Provides a savings platform for employees, contributing to their long-term financial stability.</p>
        <p>Metrics: Percentage increase in employee retention rates</p>
        <p>Potential Impact: A 12% increase in employee retention rates</p>
        <p>Success Story: Employee Provident Fund resulted in a 12% increase in employee retention rates.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('engageStakeholders')}>Engage Stakeholders</div>
      <div className="content" id="engageStakeholders">
        <p>Involves various stakeholders, including banks, to ensure financial inclusion.</p>
        <p>Metrics: Percentage increase in stakeholder engagement</p>
        <p>Potential Impact: A 10% increase in stakeholder engagement</p>
        <p>Success Story: Pradhan Mantri Jan Dhan Yojana witnessed a 10% rise in stakeholder engagement.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('fairBusinessPractices')}>Fair Business Practices</div>
      <div className="content" id="fairBusinessPractices">
        <p>Ensures fair competition in the market and prevents anti-competitive practices.</p>
        <p>Metrics: Percentage improvement in adherence to fair business practices</p>
        <p>Potential Impact: A 15% improvement in adherence to fair business practices</p>
        <p>Success Story: Competition Commission of India contributed to a 15% improvement in fair business practices.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('improvingLaborPolicies')}>Improving Labor Policies</div>
      <div className="content" id="improvingLaborPolicies">
        <p>A pension scheme for unorganized sector workers, improving social security for laborers.</p>
        <p>Metrics: Percentage improvement in labor policies</p>
        <p>Potential Impact: A 12% improvement in labor policies</p>
        <p>Success Story: Pradhan Mantri Shram Yogi Maan-dhan led to a 12% improvement in labor policies.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('innovation')}>Innovation</div>
      <div className="content" id="innovation">
        <p>Promotes grassroots innovations and supports inventors and innovators.</p>
        <p>Metrics: Percentage increase in innovative solutions</p>
        <p>Potential Impact: A 15% increase in the adoption of innovative solutions</p>
        <p>Success Story: National Innovation Foundation contributed to a 15% increase in the adoption of innovative solutions.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('legalResponsibility')}>Legal Responsibility</div>
      <div className="content" id="legalResponsibility">
        <p>Mandates companies to allocate a portion of profits for social and environmental initiatives.</p>
        <p>Metrics: Percentage compliance with legal responsibilities</p>
        <p>Potential Impact: A 10% improvement in compliance with legal responsibilities</p>
        <p>Success Story: Corporate Social Responsibility Compliance witnessed a 10% improvement in legal responsibility compliance.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('reducingCarbonFootprints')}>Reducing Carbon Footprints</div>
      <div className="content" id="reducingCarbonFootprints">
        <p>A comprehensive strategy to address climate change, including initiatives to reduce carbon emissions.</p>
        <p>Metrics: Percentage reduction in carbon emissions</p>
        <p>Potential Impact: A 20% reduction in carbon emissions</p>
        <p>Success Story: National Action Plan on Climate Change resulted in a 20% reduction in carbon emissions.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('setMeasurableGoals')}>Set Measurable Goals</div>
      <div className="content" id="setMeasurableGoals">
        <p>India has committed to achieving the UN SDGs, providing a framework for measurable goals.</p>
        <p>Metrics: Percentage achievement of set goals</p>
        <p>Potential Impact: A 25% achievement of set goals</p>
        <p>Success Story: Sustainable Development Goals witnessed a 25% achievement of set goals.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('employeeBenefits')}>Employee Benefits</div>
      <div className="content" id="employeeBenefits">
        <p>Provides a retirement benefit to employees, ensuring financial security.</p>
        <p>Metrics: Percentage improvement in employee benefits</p>
        <p>Potential Impact: A 12% improvement in overall employee benefits</p>
        <p>Success Story: Employee Provident Fund resulted in a 12% improvement in overall employee benefits.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('employeeVolunteering')}>Employee Volunteering</div>
      <div className="content" id="employeeVolunteering">
        <p>Encourage employees to volunteer for social and community development activities.</p>
        <p>Metrics: Percentage increase in employee volunteering hours</p>
        <p>Potential Impact: A 15% increase in employee volunteering hours</p>
        <p>Success Story: CSR Programs witnessed a 15% increase in employee volunteering hours.</p>
      </div>

      <div className="collapsible" onClick={() => toggleContent('sociallyEnvironmentallyConsciousInvestments')}>
        Socially and Environmentally Conscious Investments
      </div>
      <div className="content" id="sociallyEnvironmentallyConsciousInvestments">
        <p>Investment in bonds that finance environmentally friendly projects.</p>
        <p>Metrics: Percentage increase in socially and environmentally conscious investments</p>
        <p>Potential Impact: A 20% increase in socially and environmentally conscious investments</p>
        <p>Success Story: Green Bonds witnessed a 20% increase in socially and environmentally conscious investments.</p>
      </div>

    </div>
  );
};

export default AboutUs;
