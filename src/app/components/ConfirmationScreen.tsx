import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, MapPin, Check, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { parkingSpots } from "../data/parkingData";

export function ConfirmationScreen() {
  const navigate = useNavigate();
  const spot = parkingSpots[0]; // Use the first spot as example

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <button onClick={() => navigate("/map")}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button>
          <MoreVertical className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Success Icon */}
      <div className="flex flex-col items-center py-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <Check className="w-12 h-12 text-white stroke-[3]" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reserva confirmada</h1>
        <p className="text-gray-600 text-center px-4">
          Hías reservado el<br />parqueadero de Sandra
        </p>
      </div>

      {/* Reservation Details */}
      <div className="px-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Abr 24 • 7:00 pm - 3 8 pm</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-semibold text-gray-900">Parqueadero en Garaje</p>
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Calle 25 #45 - Barrio San José</p>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="h-48 bg-gray-100 rounded-xl mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Simplified map background */}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-8 h-8 text-red-500 fill-red-500" />
          </div>
          <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg">
            $ 1.8
          </div>
        </div>

        {/* Owner Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={spot.owner.avatar}
              alt={spot.owner.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{spot.owner.name}</span>
                <span className="text-sm font-semibold text-gray-900">{spot.owner.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
                <span className="text-xs text-gray-500 ml-1">(68)</span>
              </div>
            </div>
          </div>
          
          {/* Recent Users */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {spot.recentUsers?.slice(0, 5).map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                <span className="text-xs text-gray-600">+5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="px-4 pb-6 mt-auto">
        <Button className="w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-lg">
          Contactar ahora
        </Button>
      </div>
    </div>
  );
}
