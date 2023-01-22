import React from "react";

const QuoteItem = ({quote, onQuoteClicked}) => {

    const handleClick = function () {
        onQuoteClicked(quote);
    }

    return(
        <li onClick={handleClick}> "{quote.quote}" 
        {quote.source}
        </li>
    )
    
}

export default QuoteItem