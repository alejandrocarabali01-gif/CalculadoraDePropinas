import { useNavigate } from "react-router";
import { Menu, Search, Home, Heart, Clock, User, Car, Bike } from "lucide-react";
import { Input } from "./ui/input";
import { parkingSpots } from "../data/parkingData";

export function MapScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center gap-3 mb-3">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-blue-900 p-1.5 rounded">
              <Home className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-lg font-semibold text-blue-900">ParqueoVecino</span>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="¿Dónde quieres parquear?"
            className="pl-10 pr-10 h-11 bg-gray-100 border-0"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative flex-1 bg-gray-100">
        {/* Simplified map with markers */}
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          {/* Map markers */}
          <div className="absolute top-12 left-16">
            <div className="relative">
              <Car className="w-5 h-5 text-blue-600 absolute -top-6 left-1/2 -translate-x-1/2" />
              <div className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                $ 1.5
              </div>
            </div>
          </div>
          <div className="absolute top-24 right-20">
            <div className="relative">
              <Car className="w-5 h-5 text-blue-600 absolute -top-6 left-1/2 -translate-x-1/2" />
              <div className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                $ 1.8
              </div>
            </div>
          </div>
          <div className="absolute bottom-16 left-24">
            <div className="relative">
              <div className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                $ 2.8
              </div>
            </div>
          </div>
          <div className="absolute top-32 right-32">
            <div className="relative">
              <div className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                $ 2.0
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 right-16">
            <div className="relative">
              <Bike className="w-5 h-5 text-blue-600 absolute -top-6 left-1/2 -translate-x-1/2" />
              <div className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                $ 1.8
              </div>
            </div>
          </div>
        </div>

        {/* Parking spots list */}
        <div className="bg-white rounded-t-3xl -mt-8 relative z-10 p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Parqueaderos cerca de ti</h2>
          
          <div className="space-y-4">
            {parkingSpots.map((spot) => (
              <div
                key={spot.id}
                onClick={() => navigate(`/parking/${spot.id}`)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-40">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    $ {spot.price}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1">{spot.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{spot.address}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{spot.rating}</span>
                    <span className="text-sm text-gray-500">({spot.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors">
            Ver 45 parqueaderos
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t px-6 py-3">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => navigate("/map")}
            className="flex flex-col items-center gap-1"
          >
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600 font-semibold">Inicio</span>
          </button>
          <button 
            onClick={() => navigate("/favorites")}
            className="flex flex-col items-center gap-1"
          >
            <Heart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Favoritos</span>
          </button>
          <button 
            onClick={() => navigate("/bookings")}
            className="flex flex-col items-center gap-1"
          >
            <Clock className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Reservas</span>
          </button>
          <button 
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center gap-1"
          >
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}