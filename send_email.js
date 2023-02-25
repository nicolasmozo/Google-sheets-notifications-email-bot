function send_notification_email(e) 
{    
  var sheet = e.source.getActiveSheet();


  // THIS PART IS FOR ALL ORDERS TAB - IF A ROW HAS ATTENTION ON IT, BELOW CODE EXECUTES. 
  if(sheet.getName() == "All orders")
  { 
    // looks up for columns
    const status_cell = e.source.getSheetByName("All orders").getRange(e.range.rowStart,11,1,1).getValues()
    // gets row of event
    var row = e.range.getRow();
    // if event is true
    if(status_cell[0][0] == true)
    {
      // fills cell with date when checked box
      e.source.getActiveSheet().getRange(row,12).setValue(new Date());
    }
    // looks up for columns
    const sh = e.source.getSheetByName("All orders").getRange(e.range.rowStart,15,1,1).getValues()
    //if column matches with Attention, runs 
    if(sh[0] == "ATTENTION!")
    {
      const shData = e.source.getSheetByName("All orders").getRange(e.range.rowStart,1,1,14).getValues();
      let machine_Code = shData[0][0];
      let scheduled_Date = shData[0][1];
      let start_Time = shData[0][2];
      let first_Order	= shData[0][3];
      let product_Code	= shData[0][4];
      let wO_Number = shData[0][5];
      let order_Qty = shData[0][6];
      let passes	= shData[0][7];
      let required_Date = shData[0][8];
      let vTR_No = shData[0][9];
      let status = shData[0][10];
      let time_order_Finished = shData[0][11];
      let good_Passes_Done = shData[0][12];
      let percentage_done = shData[0][13];

      let msg =  " Machine code: " + machine_Code +"\n"+ " Schedule Date: " + scheduled_Date +"\n"+ " Start time: " + start_Time +"\n"+ " First order: " + first_Order +"\n"+ " Product Code: " + product_Code +"\n"+ " Order Qty: " + order_Qty +"\n"+ " Wo Number " + wO_Number+"\n"+ " Passes: " + passes +"\n"+ " Required Date: " + required_Date +"\n"+ " VTR No: " + vTR_No +"\n"+ " Status: " + status +"\n"+ " Time Order Finished: " + time_order_Finished +"\n"+ " Good Passes Done: " + good_Passes_Done +"\n"+ " Percentage done: " + percentage_done;
      Logger.log(msg);
      //GmailApp.sendEmail("joteraw561@sopulit.com", "The following order requires attention: " , msg);
    }
  }
  
 }