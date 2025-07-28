import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Shield } from "lucide-react";

const EbookDownload = () => {
  const handleDownload = () => {
    window.open("https://shorturl.at/WIowz", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6">
      <Card className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-0 rounded-2xl shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white font-orbitron">
            Payment Confirmed
          </CardTitle>
          <p className="text-gray-300 font-inter">
            Your ebook is ready for download
          </p>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2 font-orbitron">
              Bulking Diet & Workout Book
            </h3>
            <p className="text-gray-400 text-sm font-inter">
              Complete guide to building muscle mass with strategic nutrition and progressive training routines.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 rounded-lg p-3">
            <Shield className="h-5 w-5" />
            <span className="font-medium font-inter">Secure Transaction Completed</span>
          </div>
          
          <Button 
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 rounded-xl font-inter flex items-center gap-3"
          >
            <Download className="h-5 w-5" />
            Download Your Ebook
          </Button>
          
          <p className="text-gray-400 text-xs font-inter">
            Your download will begin immediately. Keep this link safe for future access.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EbookDownload;