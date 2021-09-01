import React,{useState} from 'react'

export default function TextForm(props) {

	const [text,setText]=useState("Enter the text")

	const handleUpClick=()=>{
		setText(text.toUpperCase())
		props.showAlert("Converted to Uppercase","success");
		console.log("Button clicked")
	}
	const handleLowClick=()=>{
		setText(text.toLowerCase())
		props.showAlert("Converted to Lowercase","success");
		console.log("Button clicked")
	}
	const handleCapClick=()=>{
		let i,w="",g="",k=0;
		for(i=0;i<text.length;i++){
			g=text.charAt(i);
			if(g!==" "){
				if(k===0){
					g=g.toUpperCase();
					k++;
				}
			}
			else{
				k=0;
			}
			w=w+g;
		}
		setText(w);
		props.showAlert("Capitalized","success");
		console.log("Button clicked")
	}

	const handleExtraSpaces =()=>{
		let newText=text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("Removed Extra Spaces","success");

	}
	const handleCopyClick =()=>{
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to clipboard","success");

	}

	const clearText=()=>{
		setText("");
		console.log("Button clicked")
		props.showAlert("Text Cleared","success");

	}

	const handleOnChange=(e)=>{
		setText(e.target.value)
		console.log("Value Changed")
	}
	return (
		<>
		<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
		<h1>{props.heading}</h1>
		<div className="mb-3">
 		 <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#123142',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
		</div>	
		<button className="btn btn-primary" onClick={handleUpClick}>
			Convert to Uppercase
		</button>
		<button className="btn btn-primary mx-2" onClick={handleLowClick}>
			Convert to Lowercase
		</button>
		<button className="btn btn-primary" onClick={handleCapClick}>
			Capitalize
		</button>
		<button className="btn btn-primary ms-2" onClick={handleExtraSpaces}>
			Remove Extra Spaces
		</button>
		<button className="btn btn-primary mx-2" onClick={handleCopyClick}>
			Copy Text
		</button>
		<button className="btn btn-danger px-4" onClick={clearText}>
			Clear
		</button>
		</div>

		<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
			<h1>Your Text Summary</h1>
			<p>{text.length>0?text.split(" ").length:0} words , {text.length} characters</p>
		</div>
		</>
	)
}