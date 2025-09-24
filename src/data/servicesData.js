// src/data/servicesData.js
import { FaChartLine, FaSearch, FaTasks, FaGraduationCap, FaShieldAlt, FaLaptopCode, FaMoneyBillWave } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    icon: <FaChartLine />,
    shortDescription: "Guiding businesses with strategies for growth and sustainability.",
    detailedDescription: "We work alongside leadership teams to develop comprehensive strategies that drive sustainable growth and improve operational efficiency. Our experts analyze your business model, market position, and long-term goals to create a tailored roadmap for success, helping you navigate competitive landscapes and seize new opportunities.",
    keyFeatures: [
      "Strategic Planning & Vision Development",
      "Business Model Innovation & Analysis",
      "Operational Efficiency Improvement",
      "Market Expansion Strategies",
      "Organizational Restructuring",
      "Sustainability Integration"
    ],
    process: [
      "Initial Discovery & Goal Alignment Session",
      "Comprehensive Business Diagnostic Analysis",
      "Custom Strategy Development Workshop",
      "Implementation Roadmap Creation",
      "Ongoing Support & Performance Monitoring"
    ]
  },
  {
    id: 'market-research-analysis',
    title: 'Market Research & Analysis',
    icon: <FaSearch />,
    shortDescription: "Providing data-driven insights for informed decision-making.",
    detailedDescription: "Our research team delivers actionable intelligence that removes the guesswork from your strategic decisions. We employ both qualitative and quantitative methodologies to give you a clear understanding of your market landscape, customer behaviors, and competitive environment, enabling you to make decisions with confidence.",
    keyFeatures: [
      "Competitor Analysis & Benchmarking",
      "Customer Sentiment & Satisfaction Surveys",
      "Market Sizing & Trend Analysis",
      "Product Testing & Concept Validation",
      "Pricing Strategy Research",
      "Data Visualization & Insight Reporting"
    ],
    process: [
      "Research Objective Definition",
      "Methodology Selection & Study Design",
      "Data Collection & Fieldwork",
      "Statistical Analysis & Interpretation",
      "Strategic Recommendations Presentation"
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: <FaTasks />,
    shortDescription: "Handling execution from start to finish with precision.",
    detailedDescription: "We bring discipline and expertise to your most important initiatives, ensuring they are delivered on time, within budget, and to the highest quality standards. Our certified project managers use proven methodologies to mitigate risks, manage stakeholders, and keep complex projects on track from conception through to successful completion.",
    keyFeatures: [
      "End-to-End Project Lifecycle Management",
      "Agile, Waterfall, & Hybrid Methodologies",
      "Budget Planning & Cost Control",
      "Stakeholder Communication & Reporting",
      "Risk Identification & Mitigation Planning",
      "Quality Assurance & Delivery Excellence"
    ],
    process: [
      "Project Scoping & Charter Development",
      "Detailed Planning & Resource Allocation",
      "Execution with Continuous Monitoring",
      "Performance Tracking & Adaptive Control",
      "Project Closure & Lessons Learned Analysis"
    ]
  },
  {
    id: 'training-development',
    title: 'Training & Development',
    icon: <FaGraduationCap />,
    shortDescription: "Capacity building, skills upgrading, and leadership growth.",
    detailedDescription: "We empower your workforce with the knowledge and skills needed to excel in their roles and drive your business forward. Our customized training programs focus on closing skill gaps, fostering leadership capabilities, and building a culture of continuous learning and improvement at all levels of your organization.",
    keyFeatures: [
      "Leadership & Management Development Programs",
      "Technical Skills & Software Training",
      "Soft Skills & Communication Workshops",
      "Onboarding & Orientation Program Design",
      "E-Learning Module Development",
      "Training Effectiveness Measurement"
    ],
    process: [
      "Training Needs Analysis & Skill Gap Assessment",
      "Custom Curriculum & Content Development",
      "Interactive Workshop Delivery",
      "On-the-Job Application & Coaching",
      "ROI Evaluation & Continuous Program Improvement"
    ]
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    icon: <FaShieldAlt />,
    shortDescription: "Helping businesses foresee, evaluate, and mitigate risks.",
    detailedDescription: "In today's volatile business environment, proactive risk management is not optional—it's essential. We help you identify potential threats to your operations, finances, and reputation before they materialize, and develop robust strategies to mitigate their impact, ensuring business continuity and protecting your valuable assets.",
    keyFeatures: [
      "Enterprise Risk Assessment & Frameworks",
      "Financial & Operational Risk Analysis",
      "Cybersecurity & Data Privacy Risk Evaluation",
      "Compliance & Regulatory Risk Management",
      "Business Continuity & Disaster Recovery Planning",
      "Crisis Management Preparedness"
    ],
    process: [
      "Comprehensive Risk Identification Workshop",
      "Risk Probability & Impact Assessment",
      "Risk Mitigation Strategy Development",
      "Implementation of Controls & Safeguards",
      "Ongoing Monitoring & Framework Review"
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    icon: <FaLaptopCode />,
    shortDescription: "Technology solutions, digital transformation, and systems optimization.",
    detailedDescription: "Leverage technology as a competitive advantage. We help you navigate the complex digital landscape, from selecting and implementing the right software solutions to orchestrating full-scale digital transformations. Our expertise ensures your technology infrastructure supports your business goals efficiently and securely.",
    keyFeatures: [
      "Digital Transformation Strategy",
      "IT Infrastructure Optimization & Cloud Migration",
      "Software Selection & Implementation (ERP, CRM)",
      "Data Analytics & Business Intelligence Solutions",
      "Cybersecurity Assessment & Implementation",
      "IT Governance & Process Automation"
    ],
    process: [
      "Current State Technology Assessment",
      "Future State Architecture Design",
      "Solution Evaluation & Vendor Selection",
      "Phased Implementation & Change Management",
      "Post-Implementation Support & Optimization"
    ]
  },
  {
    id: 'financial-consulting',
    title: 'Financial Consulting',
    icon: <FaMoneyBillWave />,
    shortDescription: "Financial planning, debt management, and funding strategies.",
    detailedDescription: "Achieve financial clarity and stability with expert guidance tailored to your business's unique circumstances. We provide comprehensive financial analysis, help you manage debt effectively, develop sound financial plans, and identify the optimal funding strategies to support your growth objectives and ensure long-term fiscal health.",
    keyFeatures: [
      "Financial Planning, Forecasting & Modeling",
      "Cash Flow Management & Optimization",
      "Debt Restructuring & Management Strategies",
      "Capital Raising & Funding Strategy (Debt/Equity)",
      "Cost Reduction & Profitability Analysis",
      "Mergers & Acquisitions Financial Due Diligence"
    ],
    process: [
      "Comprehensive Financial Health Diagnostic",
      "Strategic Financial Goal Setting",
      "Action Plan Development & Implementation",
      "Funding Strategy Execution Support",
      "Ongoing Financial Performance Review"
    ]
  }
];

export default servicesData;