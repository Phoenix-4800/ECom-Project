$('.drillBuy').click(()=>{
    $('.drillBuy').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/drill.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity"  required><br><br>
        <label>Name : </label>
        <input type = "text" name="name" required><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.drillDeets').html(detTemp);
})


$('.grinderbtn').click(()=>{
    $('.grinderbtn').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/grinder.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity" required><br><br>
        <label>Name : </label>
        <input type = "text" name="name"><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.grinderDeets').html(detTemp);
})



$('.pressure').click(()=>{
    $('.pressure').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/pressure.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity" required><br><br>
        <label>Name : </label>
        <input type = "text" name="name" required><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.pressureDeets').html(detTemp);
})



$('.safe').click(()=>{
    $('.safe').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/safe.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity" required><br><br>
        <label>Name : </label>
        <input type = "text" name="name" required><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.safeDeets').html(detTemp);
})

$('.firclean').click(()=>{
    $('.firclean').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/firclean.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity" required><br><br>
        <label>Name : </label>
        <input type = "text" name="name" required><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.fircleanDeets').html(detTemp);
})


$('.secCleanbtn').click(()=>{
    $('.secCleanbtn').hide();
    let detTemp = `
        <br>
        <br>
        <form method = "post" action = "http://localhost:8080/Inventory-Management/php/secClean.php">
        <label>Quantity : </label>
        <input type = "number" name="quantity" required><br><br>
        <label>Name : </label>
        <input type = "text" name="name" required><br><br>
        <label>Address : </label>
        <textarea cols="22" rows = "2" name = "address" required></textarea><br><br>
        <label>Pin : </label>
        <input type = "number" name="pin" required><br><br>
        <label>Mobile : </label>
        <input type = "number" name="mobile" required><br><br>
        <label>Email : </label>
        <input type = "email" name="email" required><br><br>
        <button type = "submit"  style=" width:100px; " name = "buyDrillFinal" class = "buyDrillFinal"  >BUY</button>
        </form>
    `;
    $('.secCleanDeets').html(detTemp);
})

