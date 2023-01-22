import React from "react";

const QuoteDetail = ({quoteProp, addQuoteProp}) => {
    console.log(addQuoteProp)
    return (
        <div>
                <h4>Quote topic:</h4> {quoteProp.philosophy}
                <h4>Source:</h4> {quoteProp.source}
                <h4>Quote:</h4> "{quoteProp.quote}"
            <button type="submit" value="Add-favourite" onClick={() => addQuoteProp(quoteProp)}>Add favourite!</button>
        </div>
    )
}

export default QuoteDetail;