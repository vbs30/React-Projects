import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrency";

function App() {
  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedRes, setConvertedRes] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedRes(amt)
    setAmt(convertedRes)
  }

  const convert = () => {
    setConvertedRes(amt * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}>
      <div className="w-full max-w-4xl mx-auto flex rounded-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/033/487/397/non_2x/the-bull-and-bear-in-a-confrontational-stance-set-against-a-stock-market-background-ai-generative-photo.jpg"
            alt="Currency"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Converter */}
        <div className="w-1/2 p-8 bg-white/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amt={amt}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmtChange={(amount) => setAmt(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amt={convertedRes}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amtDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;