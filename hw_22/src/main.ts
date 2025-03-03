import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { fibonacci } from "./sequencesUtils";

console.log(capitalize("asdasda"));
console.log(reverseString("olleh"));

const loan = new Finance.LoanCalculator(100000, 5, 24);
const tax = new Finance.TaxCalculator(55000,30);

console.log("Monthly payment: ", loan.calculateMonthlyPayment());
console.log("Tax: ", tax.calculateTax());

const user = new UserManagement.Admin.AdminUser("name", "name@test.co", true);
user.switchAdminPermissions();
console.log(user.getIsSuperAdmin());
user.switchAdminPermissions();
console.log(user.getIsSuperAdmin());

console.log(fibonacci(6));
