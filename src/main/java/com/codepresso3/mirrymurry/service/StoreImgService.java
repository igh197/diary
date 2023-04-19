package com.codepresso3.mirrymurry.service;

import com.codepresso3.mirrymurry.dto.StoreImgDto;
import com.codepresso3.mirrymurry.mapper.StoreImgMapper;
import com.codepresso3.mirrymurry.vo.StoreImg;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.util.StringUtils;

import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class StoreImgService {

    @Value("${storeImgLocation}")
    private String storeImgLocation;

    private final StoreImgMapper storeImgMapper;

    private final FileService fileService;

    public void saveStoreImg(StoreImg img, MultipartFile storeImgFile, Integer store_id) throws Exception{
        String oriImgName = storeImgFile.getOriginalFilename();
        String imgName = "";
        String imgUrl = "";

        //파일 업로드
        if(!StringUtils.isEmpty(oriImgName)){
            imgName = fileService.uploadFile(storeImgLocation, oriImgName,
                    storeImgFile.getBytes());
            imgUrl = "/images/store/" + imgName;
        }

        //상품 이미지 정보 저장
        StoreImg storeImg = new StoreImg(oriImgName, imgName, imgUrl, img.getRepImgYn(), store_id);
        storeImgMapper.saveStoreImg(storeImg);
    }

    public List<StoreImg> storeImgList(Integer store_id){
        return storeImgMapper.getStoreImgList(store_id);
    }

}