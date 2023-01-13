import { faker } from "@faker-js/faker";
const today = new Date();
const prevDate = new Date();
prevDate.setDate(today.getMonth() - 6);
export const generateHomeMock = () => {
  return {
    id: faker.datatype.number({ max: 9999 }),
    attributes: {
      description: faker.lorem.paragraph(),
      street: faker.address.streetAddress(),
      street_2: faker.address.secondaryAddress(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode("#####"),
      createdAt: faker.datatype.datetime({ min: prevDate.getTime(), max: today.getTime() }),
      updatedAt: faker.datatype.datetime({ min: prevDate.getTime(), max: today.getTime() }),
      price: faker.commerce.price(100000, 999999, 0),
      city: faker.address.cityName(),
      cover_image: {
        data: {
          id: faker.datatype.number({ max: 9999 }),
          attributes: {
            name: faker.address.streetAddress(),
            alternativeText: faker.address.streetAddress(),
            caption: faker.address.streetAddress(),
            width: 768,
            height: 576,
            formats: {
              small: {
                ext: ".jpg",
                url: `https://res.cloudinary.com/libaration/image/upload/v1668295637/${faker.address.streetAddress()}.jpg`,
                hash: "small_908_N_Payson_St_Baltimore_MD_21217_cdffe22911",
                mime: "image/jpeg",
                name: "small_908 N Payson St. Baltimore, MD 21217",
                path: null,
                size: 53.95,
                width: 500,
                height: 375,
                provider_metadata: {
                  public_id: faker.address.streetAddress(),
                  resource_type: "image",
                },
              },
            },
            medium: {
              ext: ".jpg",
              url: `https://res.cloudinary.com/libaration/image/upload/v1668295637/${faker.address.streetAddress()}.jpg`,
              hash: "medium_908_N_Payson_St_Baltimore_MD_21217_cdffe22911",
              mime: "image/jpeg",
              name: "medium_908 N Payson St. Baltimore, MD 21217",
              path: null,
              size: 118.47,
              width: 750,
              height: 563,
              provider_metadata: {
                public_id: faker.address.streetAddress(),
                resource_type: "image",
              },
            },
            thumbnail: {
              ext: ".jpg",
              url: `https://res.cloudinary.com/libaration/image/upload/v1668295637/${faker.address.streetAddress()}.jpg`,
              hash: "thumbnail_908_N_Payson_St_Baltimore_MD_21217_cdffe22911",
              mime: "image/jpeg",
              name: "thumbnail_908 N Payson St. Baltimore, MD 21217",
              path: null,
              size: 10.59,
              width: 208,
              height: 156,
              provider_metadata: {
                public_id: faker.address.streetAddress(),
                resource_type: "image",
              },
            },

            hash: "908_N_Payson_St_Baltimore_MD_21217_cdffe22911",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 86.22,
            url: `https://res.cloudinary.com/libaration/image/upload/v1668295637/${faker.address.streetAddress()}.jpg`,
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id: faker.address.streetAddress(),
              resource_type: "image",
            },
            createdAt: "2022-11-13T04:27:18.000Z",
            updatedAt: "2022-11-13T04:27:18.000Z",
          },
        },
      },
    },
  };
};
