import json

with open("src/data/content.json", "r") as f:
    data = json.load(f)

# Hero Section
data["hero"]["headline"]["value"] = "Get Expert Guidance for Your Research Synopsis"
data["hero"]["description"] = [{"value": "Get personalized, one-on-one guidance from research experts to understand your research direction and approach your synopsis with greater clarity and confidence."}]
data["hero"]["integrityBold"]["value"] = "You write. We guide."
data["hero"]["button1"]["value"] = "Get Synopsis Guidance"

# Struggling to Structure
data["strugglingSection"]["heading"] = "Struggling to Structure Your Research Synopsis?"
data["strugglingSection"]["intro"] = "Preparing a research synopsis can be challenging when you are unsure about:"
data["strugglingSection"]["points"] = [
    "How to frame a clear research topic and problem",
    "How to define relevant research objectives",
    "How to frame research questions or hypotheses",
    "How to identify and organize relevant literature",
    "How to choose an appropriate research methodology",
    "How to structure your research framework and connect the key sections"
]
data["strugglingSection"]["conclusion"] = "You don't have to figure everything out alone. With personalized guidance, you can understand the research process, make informed research decisions, and work on your synopsis step by step."

# What Is Synopsis Guidance?
data["whatIsGuidance"]["heading"] = "What Is Synopsis Guidance?"
data["whatIsGuidance"]["paragraph1"] = "Synopsis Guidance is a one-on-one research support service that helps researchers understand how to plan and approach their proposed research through a well-structured synopsis."
data["whatIsGuidance"]["paragraph2"] = ""

data["whatIsGuidance"]["pillars"] = [
    {
        "step": "1",
        "title": "Research Direction",
        "description": "Clarifying the research problem, objectives, research questions, and overall direction of the proposed study."
    },
    {
        "step": "2",
        "title": "Synopsis Components",
        "description": "Understanding the key components of a synopsis and the purpose of each section."
    },
    {
        "step": "3",
        "title": "Research Methodology",
        "description": "Understanding appropriate research methods, study design, sampling, data collection, and other methodological aspects."
    },
    {
        "step": "4",
        "title": "Research Framework",
        "description": "Understanding how the research problem, objectives, methodology, and other key elements connect."
    },
    {
        "step": "5",
        "title": "Expert Guidance & Feedback",
        "description": "Discussing research questions and challenges with experts and receiving feedback to improve clarity and approach."
    }
]

data["whatIsGuidance"]["calloutTitle"] = "We Don’t Write Your Synopsis for You."
data["whatIsGuidance"]["calloutText"] = "We guide you through the research process, explain what to do and why, review your work, and help you understand how to move forward.."
data["whatIsGuidance"]["calloutFooter"] = "You do the work. We provide the guidance."

# What We Help You With
data["whatWeGuide"]["heading"] = "What We Guide You With"
data["whatWeGuide"]["intro"] = "Guidance across the key elements of your research synopsis."
data["whatWeGuide"]["items"] = [
    {
        "title": "01. Research Topic & Problem",
        "description": "Understand how to refine your research topic and define a clear, meaningful research problem."
    },
    {
        "title": "02. Research Objectives & Questions",
        "description": "Learn how to frame clear research objectives, research questions, and hypotheses relevant to your study."
    },
    {
        "title": "03. Literature Review",
        "description": "Understand how to identify relevant studies, review existing research, and connect the literature with your research problem."
    },
    {
        "title": "04. Research Methodology",
        "description": "Understand how to approach research design, sampling, data collection, and other methodological aspects of your proposed study."
    },
    {
        "title": "05. Research Framework",
        "description": "Learn how to establish a logical framework and understand the relationship between key elements of your research."
    },
    {
        "title": "06. Synopsis Structure",
        "description": "Understand what each section of the synopsis should communicate and how the different sections connect."
    }
]

# How Our Synopsis Guidance Works
data["howItWorks"]["heading"] = "How Our Synopsis Guidance Works"
data["howItWorks"]["steps"] = [
    {
        "step": "Step 1",
        "title": "Understand Your Research",
        "description": "We first understand your research topic, objectives, requirements, current progress, and the challenges you are facing."
    },
    {
        "step": "Step 2",
        "title": "Identify What You Need",
        "description": "We identify the specific areas where you need clarity or guidance to work on your synopsis."
    },
    {
        "step": "Step 3",
        "title": "Get Expert Guidance",
        "description": "Our experts explain the relevant research concepts, methods, and approaches and guide you according to your research."
    },
    {
        "step": "Step 4",
        "title": "Learn & Apply",
        "description": "You learn how to approach each part of your synopsis and apply that knowledge while working on it yourself."
    }
]

# Why Choose WRIRK?
data["whyChoose"]["heading"] = "Why Choose WRIRK?"
data["whyChoose"]["reasons"] = [
    {
        "title": "One-on-One Guidance",
        "description": "Get personalized attention based on your research, synopsis, and specific challenges."
    },
    {
        "title": "Experienced Research Mentors",
        "description": "Learn from experienced research professionals with expertise across diverse research domains."
    },
    {
        "title": "Domain-Specific Support",
        "description": "Receive guidance relevant to your research area rather than generic, one-size-fits-all instructions."
    },
    {
        "title": "Learn Through Expert Guidance",
        "description": "Understand the concepts, methods, and approaches behind your research and learn how to apply them yourself."
    },
    {
        "title": "Review & Feedback",
        "description": "Discuss your work with experts, clarify your doubts, and receive constructive feedback based on your research progress."
    },
    {
        "title": "Researcher-Centric Approach",
        "description": "You remain actively involved in your research at every stage. We provide the guidance and expertise while you make the research decisions."
    }
]

# Who Can Benefit?
data["whoCanBenefit"]["heading"] = "Who Can Benefit?"
data["whoCanBenefit"]["intro"] = "Synopsis Guidance can help:"
data["whoCanBenefit"]["audiences"] = [
    "PhD Scholars",
    "PhD Aspirants",
    "Master's Students",
    "Faculty Members",
    "Independent Researchers",
    "Research Professionals"
]
data["whoCanBenefit"]["closing"] = "Wherever you are in the synopsis process, get the guidance you need to move forward."

# FAQs
data["faqs"]["heading"] = "FAQs"
data["faqs"]["items"] = [
    {
        "q": "1. Does WRIRK write the synopsis for me?",
        "a": "No. We do not write the synopsis for you."
    },
    {
        "q": "2. What does Synopsis Guidance include?",
        "a": "We provide complete, one-on-one guidance throughout your synopsis journey, based on your research, requirements, and understanding."
    },
    {
        "q": "3. Can I get guidance if I am new to research?",
        "a": "Yes. Our experts explain research concepts and approaches in a way that helps you understand how to work on your synopsis."
    },
    {
        "q": "4. Can you review my synopsis?",
        "a": "Yes. Our experts can review your work, provide constructive feedback, and help you understand areas that may need attention."
    },
    {
        "q": "5. Is the guidance specific to my research domain?",
        "a": "Yes. Guidance is customized to the research topic, domain, academic requirements, and stage of your work."
    },
    {
        "q": "6. Can you help me understand research methodology?",
        "a": "Yes. We explain relevant methodological approaches and help you understand how they relate to the research."
    },
    {
        "q": "7. Can I get guidance if my synopsis is already prepared?",
        "a": "Yes. Guidance is personalized according to your research, current understanding, and the areas where you need further clarity.."
    },
    {
        "q": "8. Is the guidance provided online?",
        "a": "Yes. Guidance is primarily provided through online interactions, subject to expert availability."
    },
    {
        "q": "9. Can I get guidance if I have already started my synopsis?",
        "a": "Yes. You can receive guidance based on your current progress and discuss the areas where you need further clarity or feedback."
    },
    {
        "q": "10. Will the synopsis remain my own work?",
        "a": "Absolutely. You remain the researcher and author. WRIRK provides guidance, mentorship, and feedback without writing the synopsis on your behalf."
    }
]

# Our Philosophy
data["ourPhilosophy"]["tagline"] = "We don't write the synopsis. We don't conduct the research. We teach, explain, guide, review, and help the researcher learn how to do it themselves."

with open("src/data/content.json", "w") as f:
    json.dump(data, f, indent=2)
