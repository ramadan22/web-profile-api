const defaultModel = require('../../../models/section_career_experience');
const ResponseUtils = require('../../../utils/response');

const useGetSectionCareerExperience = async (_, res) => {
  try {
    const getData = await defaultModel.get();

    ResponseUtils.defaultResponse({
      res,
      status: 200,
      message: 'Success get section career experience',
      data: getData,
    });
  } catch (error) {
    ResponseUtils.responseErrorServer(res, error);
  }
};

module.exports = {
  useGetSectionCareerExperience,
}