package com.zyeeda.cdeio.example.entity.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.data.TreeNode;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

@Entity
@Table(name = "SA_BAR")
@Scaffold("/entity/bar")
public class Bar extends DomainEntity implements TreeNode<Bar> {

    private static final long serialVersionUID = 2164009717735941225L;

    private String name = null;
    private Foo foo = null;
    private Bar parent = null;
    private List<Bar> children = null;
    private String email = null;
    private String mobile = null;
    private Integer age = null;
    private String address = null;

    @NotBlank
	@NullableSize(max = 166)
	@Column(name = "F_NAME", length = 500)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    @JoinColumn(name = "F_FOO")
    public Foo getFoo() {
        return foo;
    }

    public void setFoo(Foo foo) {
        this.foo = foo;
    }

    @ManyToOne
    @JoinColumn(name = "F_PARENT")
    public Bar getParent() {
        return parent;
    }

    public void setParent(Bar parent) {
        this.parent = parent;
    }

    @OneToMany(mappedBy = "parent")
    public List<Bar> getChildren() {
        return children;
    }

    public void setChildren(List<Bar> children) {
        this.children = children;
    }

    @NotBlank
    @Email
    @Column(name = "F_EMAIL")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@NotBlank
	@Column(name = "F_MOBILE")
	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@NotNull
	@Min(value = 10)
	@Column(name = "F_AGE")
	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@NotBlank
	@NullableSize(min = 2, max = 200)
	@Column(name = "F_ADDRESS")
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
