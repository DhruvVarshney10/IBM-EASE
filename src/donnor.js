import './donnor.css'

function donate() {
   

  return (
    <div className = 'donnor'>
        <div className = 'donnor-container'>
            <h1>Donate Item</h1>
            
                 <form>
                     <h5>Donnor Name:</h5>
                     <input type='name'/>

                     <h5>Item Name:</h5>
                     <input type='item' />

                     <h5>Address:</h5>
                     <input type='address' />

                     <h5>Upload Image:</h5>
                     <input type='image' />
                     <br/>
                     <br/>
                     <button type='donate' className='donateButton'>Donate</button>
                 </form>
        </div>
    </div>
  )
}

export default donate
 