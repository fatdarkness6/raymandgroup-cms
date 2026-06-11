import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::news-page.news-page",
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.entityService.findMany(
        "api::news-page.news-page",
        {
          locale: ctx.query.locale || undefined,
          populate: {
            news: {
              populate: {
                image: true,
                Intro: true,
              },
            },
          },
        },
      );

      return this.transformResponse(entity);
    },
  }),
);
