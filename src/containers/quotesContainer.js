import React, { useEffect, useState } from "react";
import QuoteList from "../components/QuoteList";
import QuoteDetail from "../components/QuoteDetail";

const QuotesContainer = () => {
    const [quotes, setQuotes] = useState([]);
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [favQuotes, setFavQuotes] = useState([]);
    
    const getQuotes = function() {
        fetch('http://philosophy-quotes-api.glitch.me/quotes')
        .then(res => res.json())
        .then(quotes => setQuotes(quotes))
    }

    const addToFav = (quoteToAdd) => {
        const copyOfFavQuotes = [...favQuotes]
        copyOfFavQuotes.push(quoteToAdd)
        setFavQuotes(copyOfFavQuotes)
    }

    const onQuoteClicked = function (quote) {
        setSelectedQuote(quote);
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <div>
            <h1>Quotes</h1>
            <QuoteList quotesAsAProp = {quotes} onQuoteClicked={onQuoteClicked}/>
            {selectedQuote ? <QuoteDetail quoteProp={selectedQuote} addQuoteProp={addToFav}/> : null}
            <h1>Favourite Quotes</h1>
            <QuoteList quotesAsAProp = {favQuotes} onQuoteClicked={onQuoteClicked}/>
        

        </div>
    )
}

export default QuotesContainer;