// enum SeatType {
//     Regular,
//     Premium,
//     VIP
//   }
  
//   type Ticket = [string, number, SeatType, number];
  
//   function calculateDiscount(ticket: Ticket): number {
//     let d = 0;
//     if (ticket[2] === SeatType.Premium) d = 0.10;
//     else if (ticket[2] === SeatType.VIP) d = 0.20;
//     return ticket[3] - ticket[3] * d;
//   }
  
//   const t1: Ticket = ['A', 1, SeatType.Premium, 500];
//   const t2: Ticket = ['B', 2, SeatType.VIP, 600];
//   const t3: Ticket = ['C', 3, SeatType.Regular, 400];
  
//   console.log(`₹${calculateDiscount(t1)}`);
//   console.log(`₹${calculateDiscount(t2)}`);
//   console.log(`₹${calculateDiscount(t3)}`);
  