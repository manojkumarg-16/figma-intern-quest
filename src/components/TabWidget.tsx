import { useState } from "react";
import { HelpCircle } from "lucide-react";

type Tab = "about" | "experiences" | "recommended";

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const tabContent = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    experiences: "Experience content will go here. You can add your professional experiences and achievements.",
    recommended: "Recommended content will go here. Add your recommendations and endorsements.",
  };

  return (
    <div className="bg-widget rounded-[28px] p-6 shadow-lg">
      <div className="flex items-start gap-3">
        <button className="mt-1 flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors">
          <HelpCircle className="w-6 h-6" />
        </button>

        <div className="flex-1 min-w-0">
          {/* Tabs */}
          <div className="flex gap-1 bg-background rounded-full p-1.5 mb-6">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "about"
                  ? "bg-secondary text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "experiences"
                  ? "bg-secondary text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experiences
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "recommended"
                  ? "bg-secondary text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Recommended
            </button>
          </div>

          {/* Content */}
          <div className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabWidget;
