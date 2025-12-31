import { Link } from "react-router-dom";
import { X, Zap, MapPin, Leaf, TreePine, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface CaseStudyData {
  id: number;
  title: string;
  projectSize: string;
  panels: string;
  inverter: string;
  mountingStructure: string;
  roofType?: string;
  annualUnits?: string;
  co2Reduced?: string;
  treesSaved?: string;
  image: string;
}

interface CaseStudyModalProps {
  study: CaseStudyData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CaseStudyModal = ({ study, open, onOpenChange }: CaseStudyModalProps) => {
  if (!study) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground pr-8">
            {study.title}
          </DialogTitle>
        </DialogHeader>

        {/* Project Image */}
        <div className="relative h-48 rounded-xl overflow-hidden mb-6">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-1">
              <Zap className="w-4 h-4" />
              {study.projectSize}
            </span>
          </div>
        </div>

        {/* Project Specifications */}
        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Factory className="w-5 h-5 text-primary" />
            Project Specifications
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-secondary rounded-lg">
              <span className="text-xs text-muted-foreground block">Project Size</span>
              <span className="font-semibold text-foreground">{study.projectSize}</span>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <span className="text-xs text-muted-foreground block">Panels</span>
              <span className="font-semibold text-foreground text-sm">{study.panels}</span>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <span className="text-xs text-muted-foreground block">Inverter</span>
              <span className="font-semibold text-foreground">{study.inverter}</span>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <span className="text-xs text-muted-foreground block">Mounting Structure</span>
              <span className="font-semibold text-foreground text-sm">{study.mountingStructure}</span>
            </div>
            {study.roofType && (
              <div className="p-3 bg-secondary rounded-lg col-span-2">
                <span className="text-xs text-muted-foreground block">Roof Type</span>
                <span className="font-semibold text-foreground">{study.roofType}</span>
              </div>
            )}
          </div>
        </div>

        {/* Environmental Impact */}
        {(study.annualUnits || study.co2Reduced || study.treesSaved) && (
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Environmental Impact
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {study.annualUnits && (
                <div className="p-4 bg-primary/10 rounded-xl text-center">
                  <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-lg font-bold text-primary block">{study.annualUnits}</span>
                  <span className="text-xs text-muted-foreground">Annual Units</span>
                </div>
              )}
              {study.co2Reduced && (
                <div className="p-4 bg-primary/10 rounded-xl text-center">
                  <Leaf className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-lg font-bold text-primary block">{study.co2Reduced}</span>
                  <span className="text-xs text-muted-foreground">MT CO₂ Reduced</span>
                </div>
              )}
              {study.treesSaved && (
                <div className="p-4 bg-primary/10 rounded-xl text-center">
                  <TreePine className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-lg font-bold text-primary block">{study.treesSaved}</span>
                  <span className="text-xs text-muted-foreground">Trees Saved</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button variant="solar" size="lg" className="w-full" asChild>
          <Link to="/contact" onClick={() => onOpenChange(false)}>
            Get a Similar Quote for Your Project
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
