import TabWidget from "@/components/TabWidget";
import GalleryWidget from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
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
