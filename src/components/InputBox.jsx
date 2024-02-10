import PropTypes from 'prop-types';


const InputBox = ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency='usd', amountDisabled=false, currencyDisabled = false, className = "" }) => {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='0'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

InputBox.propTypes = {
    label: PropTypes.string,
    amount: PropTypes.number,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
    amountValue: PropTypes.string,
    currencyValue: PropTypes.string,
    className : PropTypes.string,
    amountDisabled : PropTypes.bool,
    currencyDisabled : PropTypes.bool,
    selectedCurrency : PropTypes.string,
    currencyOptions : PropTypes.array
}

export default InputBox
