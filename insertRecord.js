const {PrismaClient} = require("@prisma/client");
const primsa = new PrismaClient();
async function insertNewRecord (){
    try{
        const newUser = await primsa.user.create({
            data: {
                name: "Ali Ahmadi",
                email: "ali@gmail.com"
            }
        });
        console.log("new user has been created", newUser)
    }catch(error){
        console.log(error);
    }finally{
        await primsa.$disconnent()
    }
}
insertNewRecord()