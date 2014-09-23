package com.zyeeda.cdeio.example.scaffold.grid.entity;


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.zyeeda.cdeio.validation.constraint.NullableSize;
import org.hibernate.validator.constraints.Email;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "SA_SENIORGRID_USER")
@Scaffold("/scaffold/grid/user")
public class SeniorGridUser extends DomainEntity {

    /**
	 * 序列化
	 */
	private static final long serialVersionUID = -3540826748658176714L;

	private String name;

    private Integer code;

    private String sex;

    private Date birthday;

    private String email;

    @Column(name = "F_NAME",length = 80)
    @NotNull
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "F_CODE", length = 500)
    @NullableSize(max = 166)
    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    @Column(name = "F_SEX",length = 10)
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "F_BIRTHDAY")
    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Column(name = "F_EMAIL")
    @Email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
