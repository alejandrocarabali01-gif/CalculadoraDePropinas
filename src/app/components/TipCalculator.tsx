import { useState } from "react";
import { DollarSign, Percent, Receipt, TrendingUp, Calculator } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [showResults, setShowResults] = useState(false);

  const tipOptions = [10, 15, 20];

  const handleCalculate = () => {
    if (billAmount && parseFloat(billAmount) > 0) {
      setShowResults(true);
    }
  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * tipPercentage) / 100;
    return tip.toFixed(2);
  };

  const calculateTotal = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(calculateTip());
    return (bill + tip).toFixed(2);
  };

  const handleTipSelect = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setCustomTip(value);
      setTipPercentage(numValue);
    } else if (value === "") {
      setCustomTip("");
      setTipPercentage(15);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Calculadora de Propinas</h1>
          <p className="text-gray-600">Calcula tu propina de forma rápida y sencilla</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          {/* Bill Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Monto de la cuenta
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="number"
                placeholder="0.00"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="pl-12 h-14 text-xl font-semibold bg-gray-50 border-2 border-gray-200 focus:border-blue-500 rounded-2xl"
              />
            </div>
          </div>

          {/* Tip Percentage Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Porcentaje de propina
            </label>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {tipOptions.map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => handleTipSelect(percentage)}
                  className={`h-14 rounded-xl font-semibold text-lg transition-all ${
                    tipPercentage === percentage && !customTip
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {percentage}%
                </button>
              ))}
            </div>
            
            {/* Custom Tip Input */}
            <div className="relative">
              <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="number"
                placeholder="Personalizado"
                value={customTip}
                onChange={(e) => handleCustomTipChange(e.target.value)}
                className="pl-12 h-14 text-lg font-semibold bg-gray-50 border-2 border-gray-200 focus:border-blue-500 rounded-2xl"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={handleCalculate}
            disabled={!billAmount || parseFloat(billAmount) <= 0}
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Calcular
          </Button>
        </div>

        {/* Results Card */}
        {showResults && billAmount && parseFloat(billAmount) > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
              <Receipt className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">Resultados</h2>
            </div>

            {/* Tip Amount */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Propina</p>
                    <p className="text-xs text-gray-500">{tipPercentage}%</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600">${calculateTip()}</p>
              </div>
            </div>

            {/* Total Amount */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total a pagar</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600">${calculateTotal()}</p>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Desglose detallado</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm font-semibold text-gray-800">
                  ${parseFloat(billAmount).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Propina ({tipPercentage}%)</span>
                <span className="text-sm font-semibold text-gray-800">${calculateTip()}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-base font-bold text-gray-800">Total</span>
                <span className="text-base font-bold text-gray-800">${calculateTotal()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
