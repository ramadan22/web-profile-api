const defaultModel = require('../../../models/section_educational');
const ResponseUtils = require('../../../utils/response');

const useGetSectionEducational = async (_, res) => {
  try {
    const getData = await defaultModel.get();

    ResponseUtils.defaultResponse({
      res,
      status: 200,
      message: 'Success get section educational',
      data: getData,
    });
  } catch (error) {
    ResponseUtils.responseErrorServer(res, error);
  }
};

module.exports = {
  useGetSectionEducational,
}