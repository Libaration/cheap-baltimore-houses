import { faker } from "@faker-js/faker";
const today = new Date();
const prevDate = new Date();
prevDate.setDate(today.getMonth() - 6);
export const generateHomeMock = () => {
  return {
    id: faker.datatype.number({ min: 1, max: 9999 }),
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
      bedrooms: faker.datatype.number({ min: 1, max: 5 }),
      bathrooms: faker.datatype.number({ min: 1, max: 5 }),
      available: faker.datatype.boolean(),
      additional_images: {
        data: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, () => {
          return {
            id: 10,
            attributes: {
              name: "Street View of N Payson Street",
              alternativeText: "Street View of N Payson Street",
              caption: "Street View of N Payson Street",
              width: 768,
              height: 576,
              formats: {
                small: {
                  ext: ".jpg",
                  url: "https://res.cloudinary.com/libaration/image/upload/v1668295647/small_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c.jpg",
                  hash: "small_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                  mime: "image/jpeg",
                  name: "small_dWmYM-vL8m6crI-93qtvK_9Q.jpg",
                  path: null,
                  size: 34.42,
                  width: 500,
                  height: 375,
                  provider_metadata: {
                    public_id: "small_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                    resource_type: "image",
                  },
                },
                medium: {
                  ext: ".jpg",
                  url: "https://res.cloudinary.com/libaration/image/upload/v1668295647/medium_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c.jpg",
                  hash: "medium_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                  mime: "image/jpeg",
                  name: "medium_dWmYM-vL8m6crI-93qtvK_9Q.jpg",
                  path: null,
                  size: 72.77,
                  width: 750,
                  height: 563,
                  provider_metadata: {
                    public_id: "medium_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                    resource_type: "image",
                  },
                },
                thumbnail: {
                  ext: ".jpg",
                  url: "https://res.cloudinary.com/libaration/image/upload/v1668295647/thumbnail_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c.jpg",
                  hash: "thumbnail_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                  mime: "image/jpeg",
                  name: "thumbnail_dWmYM-vL8m6crI-93qtvK_9Q.jpg",
                  path: null,
                  size: 6.96,
                  width: 208,
                  height: 156,
                  provider_metadata: {
                    public_id: "thumbnail_d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                    resource_type: "image",
                  },
                },
              },
              hash: "d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 50.9,
              url: "https://res.cloudinary.com/libaration/image/upload/v1668295647/d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c.jpg",
              previewUrl: null,
              provider: "cloudinary",
              provider_metadata: {
                public_id: "d_Wm_YM_v_L8m6cr_I_93qtv_K_9_Q_287ffb977c",
                resource_type: "image",
              },
              createdAt: "2022-11-13T04:27:28.000Z",
              updatedAt: "2022-11-13T07:30:23.000Z",
            },
          };
        }),
      },

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
