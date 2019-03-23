import React from "react";
import List from "./List.js"

export default class Form extends React.Component{
   constructor(){
       super();
       this.state={
          word: "",
          typoWordArray1: [],
          typoWordArray2:[],
          typoWordArray3:[],
          typoWordArray4:[],
          typoWordArray5:[],
          typoWordArray6:[],
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
          checkbox5: false,
          checkbox6: false,
       }
       this.putWord=this.putWord.bind(this);
       this.clickHandeler=this.clickHandeler.bind(this);
       this.change=this.change.bind(this);
   }

   putWord=(event)=>{
       this.setState({word: event.target.value});
   }

   change(event){
       let name=event.target.name;
       let value=event.target.checked;
       this.setState({[name]: value}) 
       console.log(name)
       console.log(value)
       console.log(this.state.checkbox1)
   }

   clickHandeler=(word)=>{
        const characterArray=word.split('');
        const alphabetArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const typoWordArray1=[];
        const typoWordArray2=[];
        const typoWordArray3=[];
        const typoWordArray4=[];
        const typoWordArray5=[];
        const typoWordArray6=[];
    
        /* This loop skipps character */
        for(let i=0; i<characterArray.length; i++)
        {
            let tempSkip=word.split('');
            tempSkip.splice(i,1);
            let skippedString=tempSkip.join('');
            typoWordArray1.push(skippedString);
        }
        this.setState({typoWordArray1: typoWordArray1}) 

        /* This loop swipes the characters back and foront */
        for(let j=0; j<characterArray.length-1; j++)
        {
        let generate=word.split('');
        generate[j]=characterArray[j+1];
        generate[j+1]=characterArray[j];
        let string=generate.join('');
        typoWordArray2.push(string);
        }
        this.setState({typoWordArray2: typoWordArray2}) 

        /* generate words with spaces inside */
        for(let i=0; i<characterArray.length-1; i++)
        {
        let temp=word.split('');
        temp.splice(i+1, 0, ' ');
        let string=temp.join('');
        typoWordArray3.push(string);
        }
        this.setState({typoWordArray3: typoWordArray3}) 

        /* This loop doubles the characters */
        for(let i=0; i<characterArray.length; i++)
        {
            let temp=word.split('');
            temp.splice(i, 0, characterArray[i]);
            let string=temp.join('');
            typoWordArray4.push(string);
        }
        this.setState({typoWordArray4: typoWordArray4}) 

        /* this loop generates wrong word with alphabets inserted in middle */
        for(let i=0; i<characterArray.length; i++)
        {
            let temp=word.split('');
            for(let j=0; j<26; j++)
            {
                temp.splice(i, 0, alphabetArray[j]);
                let string=temp.join('');
                typoWordArray5.push(string);
                temp=word.split('');
            }
            this.setState({typoWordArray5: typoWordArray5}) 

         /*  Loop that generate replaced character */
        for(let i=0; i<characterArray.length; i++)
        {
            for(let j=0; j<26; j++)
            {
                let temp=word.split('');
                temp[i]=alphabetArray[j];
                let string=temp.join('');
                typoWordArray6.push(string);
            }
        }
        this.setState({typoWordArray6: typoWordArray6}) 
    }
   }

   render(){
       return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input onChange={this.putWord} type="text" class="form-control" placeholder="Enter word" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={()=> {this.clickHandeler(this.state.word)}}>Generate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox1" checked={this.state.checkbox1} onChange={this.change}/> Skip characters from the word</label>
                </div>
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox2" checked={this.state.checkbox2} onChange={this.change}/> Swipped characters</label>
                </div>
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox3" checked={this.state.checkbox3} onChange={this.change}/> Space in place of characters</label>
                </div>
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox4" checked={this.state.checkbox4} onChange={this.change}/> double characters</label>
                </div>
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox5" checked={this.state.checkbox5} onChange={this.change}/> Wrong character added</label>
                </div>
                <div className="col-md-4 col-lg-4">
                    <label><input type="checkbox" name="checkbox6" checked={this.state.checkbox6} onChange={this.change}/> Replaced character</label>
                </div>
            </div>
            <hr/>
            <div className="row">
                {this.state.checkbox1 && <List array={this.state.typoWordArray1}/>}
                {this.state.checkbox2 && <List array={this.state.typoWordArray2}/>}
                {this.state.checkbox3 && <List array={this.state.typoWordArray3}/>}
                {this.state.checkbox4 && <List array={this.state.typoWordArray4}/>}
                {this.state.checkbox5 && <List array={this.state.typoWordArray5}/>}
                {this.state.checkbox6 && <List array={this.state.typoWordArray6}/>}
            </div>
        </div>
       )
   }
}