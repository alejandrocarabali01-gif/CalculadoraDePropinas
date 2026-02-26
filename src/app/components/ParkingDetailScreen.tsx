import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Heart, MapPin, ChevronRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { parkingSpots } from "../data/parkingData";

export function ParkingDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const spot = parkingSpots.find(s => s.id === Number(id)) || parkingSpots[0];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header with Image */}
      <div className="relative h-64">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={() => navigate("/map")}
            className="w-10 h-10 bg-gray-900/50 backdrop-blur rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button className="w-10 h-10 bg-gray-900/50 backdrop-blur rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900/70 backdrop-blur text-white px-4 py-2 rounded-lg font-semibold">
          $ {spot.price}/hora
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900 mb-1">{spot.name}</h1>
            <p className="text-sm text-gray-600">{spot.address}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900">{spot.rating}</span>
          <span className="text-sm text-gray-500">({spot.reviews} reviews)</span>
        </div>

        {/* Distance Badge */}
        <div className="flex gap-2 mb-6">
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Avala
          </div>
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            Di ai mante
          </div>
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {spot.distance} mi
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div className="space-y-2">
            {spot.availability?.map((slot, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">
                    {slot.start} - {slot.end}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{slot.available}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Access Info */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-gray-900 mb-2">Acceso</h3>
          <p className="text-sm text-gray-600 mb-3">
            {spot.access}
          </p>
          <button className="flex items-center justify-between w-full py-3 border-t border-gray-100">
            <span className="text-sm text-gray-900">Acerca de este espacio</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Owner Info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 py-3 border-t border-gray-100">
            <img
              src={spot.owner.avatar}
              alt={spot.owner.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-gray-900">{spot.owner.name}</span>
                <span className="text-sm font-semibold text-gray-900">{spot.owner.rating}</span>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-xs text-gray-500">@ ({spot.owner.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <div className="p-4 border-t bg-white">
        <Button
          onClick={() => navigate("/confirmation")}
          className="w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Reservar ahora
        </Button>
      </div>
    </div>
  );
}
