const defaultModel = require('../../../models/section_opening');
const ResponseUtils = require('../../../utils/response');

const useGetSectionOpening = async (_, res) => {
  try {
    const getData = await defaultModel.get();

    ResponseUtils.defaultResponse({
      res,
      status: 200,
      message: 'Success get section opening',
      data: getData,
    });
  } catch (error) {
    ResponseUtils.responseErrorServer(res, error);
  }
};

module.exports = {
  useGetSectionOpening,
}