import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import {
  PlACE_PAGE_INVALID_CONTENT,
  PLACE_PAGE_RESPONSE,
  PlACE_PAGE_VALID_CONTENT,
} from './__mocks__/getMediaByPlaceId';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getPlacesByCityId method', () => {
    let lib: Nanogram = null;
    const PLACE_ID = 2999512;
    const URL = `https://www.instagram.com/explore/locations/${PLACE_ID}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByPlaceId(PLACE_ID);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(PLACE_PAGE_RESPONSE));
      await lib.getMediaByPlaceId(PLACE_ID).then((res) => {
        expect(res).toEqual(PlACE_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByPlaceId(PLACE_ID).then((res) => {
        expect(res).toEqual(PlACE_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByPlaceId(undefined as number).then((res) => {
        expect(res).toEqual(PlACE_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByPlaceId(undefined as number);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
