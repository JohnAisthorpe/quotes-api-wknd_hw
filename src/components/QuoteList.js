import React from "react";
import QuoteItem from "./QuoteItem";

const QuoteList = ({quotesAsAProp, onQuoteClicked}) => {
    const arrayOfQuotes = quotesAsAProp.map(quote => {
        return(
            <QuoteItem quote={quote} onQuoteClicked={onQuoteClicked}/>
        )
    })
    return(
        <ol>
            <>
                {arrayOfQuotes}
            </>
        </ol>
    )
}

export default QuoteList;