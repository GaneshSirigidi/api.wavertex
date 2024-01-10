import { injectable } from "inversify";
import dbClient from "../../db/dbConnect";
import { contacts } from "../../schemas/contactSchema";

@injectable()
class ContactsService {

    async createContact(data:any) {
        const addContactData = await dbClient
            .insert(contacts)
            .values(data)
            .returning();
        return addContactData;
    }
}

export default ContactsService;