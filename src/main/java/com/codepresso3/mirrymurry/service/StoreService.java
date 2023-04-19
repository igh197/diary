package com.codepresso3.mirrymurry.service;

import com.codepresso3.mirrymurry.mapper.StoreMapper;
import com.codepresso3.mirrymurry.vo.Store;
import com.codepresso3.mirrymurry.vo.StoreImg;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service
@Transactional
public class StoreService {

    private StoreMapper storeMapper;
    private StoreImgService storeImgService;

    public StoreService(StoreMapper storeMapper, StoreImgService storeImgService) {
        this.storeMapper = storeMapper;
        this.storeImgService = storeImgService;
    }

    public void saveStoreImg(Store store, List<MultipartFile> storeImgFileList) throws Exception{
        Store store_id = storeMapper.findByMemberId(store.getMember_id());
        for(int i=0;i<storeImgFileList.size();i++){
            StoreImg storeImg = new StoreImg();
//            storeImg.setStore_id(store_id.getId());
            if(i == 0)
                storeImg.setRepImgYn("Y");
            else
                storeImg.setRepImgYn("N");

            storeImgService.saveStoreImg(storeImg, storeImgFileList.get(i), store_id.getId());
        }
    }

}