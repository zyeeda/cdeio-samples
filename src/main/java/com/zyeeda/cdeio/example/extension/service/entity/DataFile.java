package com.zyeeda.cdeio.example.extension.service.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.commons.resource.entity.Attachment;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

/**
 * 扩展 -> 服务 -> 文件下载(文件上传)实体.
 * @author shupeipei
 *
 */
@Entity
@Table(name = "CDE_SERVICE_DATAFILE")
@Scaffold({"/extension/service/downloadfile", "/extension/service/uploadfile"})
public class DataFile extends DomainEntity {

    private static final long serialVersionUID = -8854616380326781241L;

    /**
     * 文件名称
     */
    private String name;

    /**
     * 文件编号
     */
    private String code;

    /**
     * 文件摘要
     */
    private String summary;

    /**
     * 附件
     */
    private Attachment attachment;

    @Column(name = "F_NAME", length = 500)
    @NotBlank
    @NullableSize(min = 1)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "F_CODE", length = 500)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Column(name = "F_SUMMARY", length = 4000)
    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @OneToOne
    @JoinColumn(name = "F_ATTACHMENT_ID")
    public Attachment getAttachment (){
        return attachment;
    }

    public void setAttachment (Attachment attachment){
        this.attachment = attachment;
    }
}
