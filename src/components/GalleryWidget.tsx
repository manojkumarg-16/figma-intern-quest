import { useState } from "react";
import { HelpCircle, ChevronLeft, ChevronRight, Plus } from "lucide-react";

const GalleryWidget = () => {
  const [images, setImages] = useState<string[]>([
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 3;

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = event.target?.result as string;
          setImages([...images, newImage]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="bg-widget/90 backdrop-blur-xl rounded-[28px] p-6 shadow-glow border border-secondary/20">
      <div className="flex items-start gap-3">
        <button className="mt-1 flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors">
          <HelpCircle className="w-6 h-6" />
        </button>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="bg-background/50 backdrop-blur-sm rounded-full px-6 py-3">
              <h2 className="text-lg font-semibold text-foreground">Gallery</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddImage}
                className="flex items-center gap-2 bg-gradient-secondary hover:shadow-glow text-foreground rounded-full px-6 py-3 text-sm font-medium transition-all shadow-md"
              >
                <Plus className="w-5 h-5" />
                ADD IMAGE
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="w-11 h-11 rounded-full bg-gradient-secondary hover:shadow-glow text-foreground flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="w-11 h-11 rounded-full bg-gradient-secondary hover:shadow-glow text-foreground flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {visibleImages.map((image, index) => (
              <div
                key={startIndex + index}
                className="aspect-square rounded-3xl overflow-hidden bg-muted hover:scale-105 hover:shadow-glow transition-all shadow-md border border-primary/10"
              >
                <img
                  src={image}
                  alt={`Gallery image ${startIndex + index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="text-muted-foreground text-sm">
              {currentPage} / {totalPages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
