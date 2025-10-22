import TabWidget from "@/components/TabWidget";
import GalleryWidget from "@/components/GalleryWidget";
import backgroundImage from "@/assets/background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Empty but responsive */}
          <div className="hidden lg:block" />

          {/* Right side - Widgets */}
          <div className="space-y-8">
            <TabWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
