import './donor.css'

function donate() {
   
  return (
    <div className = 'donate'>
        <div className = 'donoteContainer'>
            <h1>Donate Item</h1>
            
                 <form>
                     <h5>Donnor Name:</h5>
                     <input type='text'/>

                     <h5>Item Name:</h5>
                     <input type='text' />

                     <h5>Address:</h5>
                     <input type='text' />

                     <h5>Date:</h5>
                     <input type='date' />

                     <h5>Upload Item Image to Donate:</h5>
                     <input class="file-upload-input" type = "file" onchange = "readURL(this)" accept = "Image/*"/>
                     <br/>
                     <br/>
                     <button type='donate' className='donateButton'>Donate</button>
                 </form>
        </div>
    </div>
  )
}

export default donate
 