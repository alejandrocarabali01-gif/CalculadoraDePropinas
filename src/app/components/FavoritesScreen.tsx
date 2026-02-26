import { useNavigate } from "react-router";
import { ArrowLeft, Heart, Trash2 } from "lucide-react";
import { parkingSpots } from "../data/parkingData";

export function FavoritesScreen() {
  const navigate = useNavigate();
  const favorites = parkingSpots.slice(0, 2); // Mock favorites

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white p-4 border-b flex items-center gap-3">
        <button onClick={() => navigate("/map")}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Mis Favoritos</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {favorites.length > 0 ? (
          <div className="space-y-4">
            {favorites.map((spot) => (
              <div
                key={spot.id}
                onClick={() => navigate(`/parking/${spot.id}`)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer relative"
              >
                <button className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </button>
                <div className="relative h-40">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
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
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No tienes favoritos
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Agrega parqueaderos a tus favoritos para acceder rápidamente
            </p>
            <button
              onClick={() => navigate("/map")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Explorar parqueaderos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
