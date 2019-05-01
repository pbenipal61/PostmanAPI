const createEvent = (fields)=> {
  // console.log(fields);

  return new Promise((resolve, reject)=>{
    try {
      const {title, type, message, instructions,
        reach, day, month, year, hour, minute, city, country,
        continent, bound, photos, contactName,
        contactPhone, contactEmail, address} = fields;


      const obj = {
        meta: {
          createdAt: new Date(),
        },
        data: {
          what: {
            title, type, message,
          },
          how: {
            instructions,
          },
          reach: {
            reach, bound,
          },
          when: {
            day, month, year, hour, minute,
          },
          where: {
            address, city, country, continent,
          },
          media: {
            photos,
          },
          contact: {
            name: contactName,
            email: contactEmail,
            phone: contactPhone,
          },
        },
      };


      resolve(obj);
    } catch (e) {
      reject(e);
    }
  });
};

export {createEvent};
