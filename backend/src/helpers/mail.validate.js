import dns from "dns";

function validateEmailDomain(email) {
    return new Promise((resolve, reject) => {
        const domain = email.substring(email.lastIndexOf("@") + 1);
        dns.resolveMx(domain, (err, addresses) => {
            if (err) {
                resolve(false);
                return;
            }
            if (addresses && addresses.length > 0) {
                const allowedDomains = [".edu", "st.jmi.ac.in"];
                const isValidDomain = allowedDomains.some((allowedDomain) =>
                    domain.endsWith(allowedDomain)
                );
                const isNotGmail = !domain.includes("gmail.com");
                if (isValidDomain && isNotGmail) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } else {
                reject("No MX records found for the domain");
            }
        });
    });
}


export default validateEmailDomain;