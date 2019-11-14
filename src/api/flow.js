import request from "@/utils/request";

export const getAllflowList = () => {
  return request({
    url: "/flowlist",
    method: "get"
  });
};

export const getflowlist = val => {
  return request({
    url: "/flowlist?_page=" + val.currentPage + "&_limit=" + val.pageSize,
    method: "get"
  });
};

export const addFlow = data => {
  return request({
    url: "/add/flow",
    method: "post",
    data
  });
};

export const delFlow = data => {
  return request({
    url: "/del/flow/" + data,
    method: "DELETE"
  });
};

export const modifyFlow = data => {
  return request({
    url: "/modify/flow/" + data.id,
    method: "PUT",
    data
  });
};